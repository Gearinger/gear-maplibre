import { createApp } from 'vue'
import App from './App.vue'

import {
  Button,
  Col,
  Descriptions,
  DescriptionsItem,
  Form,
  FormItem,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
  SelectOption,
  Table,
  TabPane,
  Tabs,
  Textarea,
  Tooltip,
} from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import { router } from './router';

const app = createApp(App);

const components = {
  AButton: Button,
  ACol: Col,
  ADescriptions: Descriptions,
  ADescriptionsItem: DescriptionsItem,
  AForm: Form,
  AFormItem: FormItem,
  AInput: Input,
  AInputNumber: InputNumber,
  AModal: Modal,
  ARow: Row,
  ASelect: Select,
  ASelectOption: SelectOption,
  ATable: Table,
  ATabPane: TabPane,
  ATabs: Tabs,
  ATextarea: Textarea,
  ATooltip: Tooltip,
};

for (const [name, component] of Object.entries(components)) {
  app.component(name, component);
}

app.use(router);
app.mount('#app')
