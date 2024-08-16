import { type FormItemProps } from 'antd';
import { type FC } from 'react';
import { type SelectProps } from 'src/antd-components/Select';
import { type TextAreaProps } from 'src/antd-components/TextArea';
import type * as fieldMap from 'src/form-generator/fieldConfig';
import { type OptionsConfigType, type OptionType, type StyledType } from 'src/types';

/**
 * @name component组件参数的类型
 * @description 传入组件内部的参数变量类型,这里只列出新增的自定义类型
 */
export type PropsType = {
  // ** 部分可复用组件配置
  // 选项配置。单选，多选
  optionsConfig?: OptionsConfigType<any>;

  // ** select---下拉框
  options?: OptionType[];

  // ** Cascade---级联组件
  // 级联组件的每级占位符
  placeholders?: string[];
  // 级联层级
  level?: number;
  // 级联数据
  cascadeData?: string[][];
  // 级联里的下拉框配置项
  selectOptions?: SelectProps;
  // 级联里的文本框配置项
  textAreaOptions?: TextAreaProps;
  // 显示文本框
  showTextArea?: boolean;

  // 其他参数，参考具体组件的api
  [key: string]: any;
};

// 组件item中可配置的字段类型
export class ConfigType {
  // ** 以下是可配置的类型
  // 组件标题名称
  label?: string;
  // 显示标题
  showLabel?: boolean;
  // 隐藏组件
  hidden?: boolean;
  // 组件自定义样式
  styled?: StyledType;
}

type ConfigAndFormItemType = ConfigType & Omit<FormItemProps, 'children'>;

/**
 * @name component对象的类型
 */
export type ComponentItemType<T = AnyObject> = {
  // ** 以下是固定字段，不可动态配置；可配置的类型，请放在ConfigType中
  // 每个组件的唯一标识id
  id: string;
  // 组件的类型
  type: string;
  // 组件的参数集合，props里的内容会传到组件里
  props?: T & PropsType;
  // 可嵌套的子组件
  children?: ComponentItemType[];
} & ConfigAndFormItemType;

// 结构对象类型
export type StructureItemType = {
  // 每个组件的唯一标识id
  id: string;
  // 可嵌套的子组件
  children?: StructureItemType[];
};

export type ComponentStructureType = {
  componentItems: ComponentItemType[];
  structureItems: StructureItemType[];
};

// 外部传入的组件对象类型
export type ComponentMapType = Record<string, FC<any>>;

// 字段配置默认类型，这里的类型用作左侧组件列表展示
export type FieldConfigType<T = AnyObject> = {
  // 左侧组件列表图标
  icon?: string;
  // 左侧组件列表名称
  label: string;
  // 组件初始数据
  componentItem: ComponentItemType<T>;
  // 右侧组件配置面板数据
  configPanel: (value?: AnyObject) => ComponentItemType[];
};

export type FieldMapType = Record<keyof typeof fieldMap, FieldConfigType>;

export type EditorPropsType = {
  currentId?: string;
  onSelect?: (id: string) => void;
  onDelete?: (id: string) => void;
  onCopy?: (id: string) => void;
};
