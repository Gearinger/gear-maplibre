<template>
    <div class="container">
        <h1>记忆卡片游戏</h1>
        <p>匹配成对的卡片，测试你的记忆力！</p>

        <div class="auth-section">
            <input type="email" id="email" placeholder="电子邮箱">
            <input type="password" id="password" placeholder="密码">
            <button id="signUp">注册</button>
            <button id="signIn">登录</button>
            <button id="signOut" style="display:none">登出</button>
        </div>

        <div id="user-info" style="display:none; margin-bottom:20px">
            <span>欢迎, <span id="user-email"></span></span>
            <span class="user-badge" id="user-score">得分: 0</span>
        </div>

        <div class="game-info">
            <div>时间: <span id="timer">0</span> 秒</div>
            <div>移动次数: <span id="moves">0</span></div>
        </div>

        <div class="game-board" id="game-board">
            <!-- 卡片将通过JavaScript动态生成 -->
        </div>

        <div class="controls">
            <button id="start-game">开始游戏</button>
            <button id="reset-game">重新开始</button>
        </div>

        <div class="leaderboard">
            <div class="border">
                <h2>排行榜</h2>
                <div id="scores-list">
                    <div class="score-item"><span>加载中...</span><span>分数</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js';
import { onMounted } from 'vue';

onMounted(() => {
    document.title = "记忆卡片游戏 - Supabase 版";

    // Supabase初始化
    const SUPABASE_URL = 'http://42.121.101.179:8000';
    const SUPABASE_ANON_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYW5vbiIsInJlZiI6InNicC1qZWZqOTVocm1pZTNyMXE0IiwiaXNzIjoic3VwYWJhc2UiLCJpYXQiOjE3NTYwODE4ODQsImV4cCI6MjA3MTY1Nzg4NH0.iTGFm_VXxbJ5Oeg2J5kVb3Jb2GfKGWnlMikjbw2FKr4';

    const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // 游戏状态
    let gameStarted = false;
    let timer = 0;
    let timerInterval;
    let moves = 0;
    let matchedPairs = 0;
    let flippedCards = [];
    let userEmail = '';

    // 卡片符号
    const cardSymbols = ['🍎', '🍌', '🍇', '🍊', '🍓', '🍉', '🥝', '🍒'];

    // DOM元素
    const gameBoard = document.getElementById('game-board');
    const timerElement = document.getElementById('timer');
    const movesElement = document.getElementById('moves');
    const startButton = document.getElementById('start-game');
    const resetButton = document.getElementById('reset-game');
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const signOutButton = document.getElementById('signOut');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const userInfo = document.getElementById('user-info');
    const userEmailElement = document.getElementById('user-email');
    const userScoreElement = document.getElementById('user-score');
    const scoresList = document.getElementById('scores-list');

    // 初始化游戏
    function initGame() {
        // 创建卡片
        const cards = [...cardSymbols, ...cardSymbols];
        // 洗牌
        cards.sort(() => Math.random() - 0.5);

        // 生成卡片HTML
        gameBoard.innerHTML = '';
        cards.forEach((symbol, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.symbol = symbol;
            card.dataset.index = index;
            card.innerHTML = '<span style="display:none">' + symbol + '</span>';
            card.addEventListener('click', () => flipCard(card));
            gameBoard.appendChild(card);
        });

        // 重置游戏状态
        clearInterval(timerInterval);
        timer = 0;
        moves = 0;
        matchedPairs = 0;
        flippedCards = [];
        timerElement.textContent = '0';
        movesElement.textContent = '0';
    }

    // 翻转卡片
    function flipCard(card) {
        if (!gameStarted || flippedCards.length >= 2 || card.classList.contains('flipped') || card.classList.contains('matched')) {
            return;
        }

        card.classList.add('flipped');
        card.querySelector('span').style.display = 'block';
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            moves++;
            movesElement.textContent = moves;

            setTimeout(checkMatch, 500);
        }
    }

    // 检查是否匹配
    function checkMatch() {
        const [card1, card2] = flippedCards;
        const isMatch = card1.dataset.symbol === card2.dataset.symbol;

        if (isMatch) {
            card1.classList.add('matched');
            card2.classList.add('matched');
            matchedPairs++;

            // 检查游戏是否结束
            if (matchedPairs === cardSymbols.length) {
                endGame();
            }
        } else {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.querySelector('span').style.display = 'none';
            card2.querySelector('span').style.display = 'none';
        }

        flippedCards = [];
    }

    // 开始游戏
    function startGame() {
        if (!userEmail) {
            alert('请先登录以开始游戏');
            return;
        }

        gameStarted = true;
        initGame();

        // 启动计时器
        timerInterval = setInterval(() => {
            timer++;
            timerElement.textContent = timer;
        }, 1000);
    }

    // 结束游戏
    function endGame() {
        gameStarted = false;
        clearInterval(timerInterval);

        // 计算得分 (时间越短，移动次数越少，得分越高)
        const score = Math.max(1, 1000 - (timer * 10) - (moves * 5));

        // 更新用户界面
        userScoreElement.textContent = `得分: ${score}`;

        // 保存得分到Supabase
        saveScore(score);

        // 更新排行榜
        getLeaderboard();

        alert(`游戏结束！你的得分: ${score}`);
    }

    // 保存得分到Supabase
    async function saveScore(score) {
        const user = await client.auth.getUser();
        const { error } = await client
            .from('scores')
            .insert([{ email: userEmail, score: score, moves: moves, time: timer, user_id: user.data.user.id }]);

        if (error) {
            console.error('保存得分时出错:', error);
        }
    }

    // 获取排行榜
    async function getLeaderboard() {
        const { data, error } = await client
            .from('scores')
            .select('email, score')
            .order('score', { ascending: false })
            .limit(10);

        if (error) {
            console.error('获取排行榜时出错:', error);
            return;
        }

        // 更新排行榜UI
        scoresList.innerHTML = '';
        data.forEach((item, index) => {
            const scoreItem = document.createElement('div');
            scoreItem.className = 'score-item';
            scoreItem.innerHTML = `
                    <span>${index + 1}. ${item.email}</span>
                    <span>${item.score}</span>
                `;
            scoresList.appendChild(scoreItem);
        });
    }

    // 用户注册
    async function handleSignUp() {
        const email = emailInput.value;
        const password = passwordInput.value;

        const { user, error } = await client.auth.signUp({ email, password });

        if (error) {
            alert('注册失败: ' + error.message);
        } else {
            alert('注册成功！请检查您的邮箱进行验证。');
        }
    }

    // 用户登录
    async function handleSignIn() {
        const email = emailInput.value;
        const password = passwordInput.value;

        const { user, error } = await client.auth.signInWithPassword({ email, password });

        if (error) {
            alert('登录失败: ' + error.message);
        } else {
            alert('登录成功！');
            userEmail = email;
            userEmailElement.textContent = email;
            userInfo.style.display = 'block';
            signOutButton.style.display = 'block';
            emailInput.style.display = 'none';
            passwordInput.style.display = 'none';
            signUpButton.style.display = 'none';
            signInButton.style.display = 'none';

            // 获取用户得分
            const { data } = await client
                .from('scores')
                .select('score')
                .eq('email', email)
                .order('score', { ascending: false })
                .limit(1);

            if (data && data.length > 0) {
                userScoreElement.textContent = `最高分: ${data[0].score}`;
            }

            // 获取排行榜
            getLeaderboard();
        }
    }

    // 用户登出
    async function handleSignOut() {
        await client.auth.signOut();
        userEmail = '';
        userInfo.style.display = 'none';
        signOutButton.style.display = 'none';
        emailInput.style.display = 'inline-block';
        passwordInput.style.display = 'inline-block';
        signUpButton.style.display = 'inline-block';
        signInButton.style.display = 'inline-block';
    }

    // 检查用户是否已登录
    async function checkAuth() {
        const user = client.auth.getUser();
        if (user) {
            userEmail = user.email;
            userEmailElement.textContent = user.email;
            userInfo.style.display = 'block';
            signOutButton.style.display = 'block';
            emailInput.style.display = 'none';
            passwordInput.style.display = 'none';
            signUpButton.style.display = 'none';
            signInButton.style.display = 'none';

            // 获取用户最高分
            const { data } = await client
                .from('scores')
                .select('score')
                .eq('email', user.email)
                .order('score', { ascending: false })
                .limit(1);

            if (data && data.length > 0) {
                userScoreElement.textContent = `最高分: ${data[0].score}`;
            }

            // 获取排行榜
            getLeaderboard();
        }
    }

    // 事件监听
    startButton.addEventListener('click', startGame);
    resetButton.addEventListener('click', initGame);
    signUpButton.addEventListener('click', handleSignUp);
    signInButton.addEventListener('click', handleSignIn);
    signOutButton.addEventListener('click', handleSignOut);

    // 初始化
    initGame();
    checkAuth();
});

</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Arial Rounded MT Bold', 'Segoe UI', sans-serif;
}

body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    min-height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container {
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

header {
    text-align: center;
    margin-bottom: 30px;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.auth-section {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

input,
button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
}

button {
    background-color: #FF9F43;
    color: white;
    cursor: pointer;
    transition: all 0.3s;
}

button:hover {
    background-color: #FFB74D;
    transform: translateY(-2px);
}

.game-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
    background: rgba(255, 255, 255, 0.1);
    padding: 15px;
    border-radius: 10px;
}

.game-board {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    width: 100%;
    max-width: 500px;
    margin-bottom: 30px;
}

.card {
    aspect-ratio: 1;
    background-color: #2c3e50;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.3s;
    transform-style: preserve-3d;
}

.card.flipped {
    transform: rotateY(180deg);
    background-color: #ecf0f1;
    color: #2c3e50;
}

.card.matched {
    background-color: #2ecc71;
    color: white;
    transform: rotateY(180deg) scale(0.95);
    cursor: default;
}

.controls {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
}

.leaderboard {
    position: absolute;
    right: 20px;
    width: 20%;
    height: 100%;
    max-width: 500px;
}

.leaderboard .border {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
}

.leaderboard h2 {
    text-align: center;
    margin-bottom: 15px;
}

.score-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.user-badge {
    display: inline-block;
    padding: 5px 10px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    margin-left: 10px;
}

@media (max-width: 500px) {
    .game-board {
        grid-template-columns: repeat(3, 1fr);
    }

    h1 {
        font-size: 2rem;
    }
}
</style>