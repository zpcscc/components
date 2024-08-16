import { type ComponentMapType, type EditorPropsType } from 'src/form-generator/types';

export type BaseRenderType = {
  defaultValue?: AnyObject;
  componentMap?: ComponentMapType;
  editorProps?: EditorPropsType;
};
