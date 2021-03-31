import Icon from './Icon/index';
import { Button } from './Button';
import {
  // Need
  Button as AntButton,
  Rate,
  Input,
  Slider,
} from 'ant-design-vue';

import { FrownOutlined, SmileOutlined } from '@ant-design/icons-vue';
import { App } from 'vue';

const compList = [Icon, Button, AntButton.Group, Rate, Input, FrownOutlined, SmileOutlined, Slider];

export function registerGlobComp(app: App) {
  compList.forEach((comp: any) => {
    app.component(comp.name || comp.displayName, comp);
  });
}
