import CloseCircleOutlined from '@ant-design/icons/CloseCircleOutlined';
import MenuOutlined from '@ant-design/icons/MenuOutlined';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Checkbox, Radio, Space, Tooltip } from 'antd';
import { type FC } from 'react';
import Input, { type InputProps } from 'src/antd-components/Input';
import { type OptionSelectType } from 'src/types';
import { type CurrOptionType } from './type';

export type OptionProps = {
  type?: OptionSelectType;
  option: Omit<CurrOptionType, 'id'> & { id: string };
  inputOptions?: InputProps;
  onOptionChange: (option: CurrOptionType) => void;
  onCheckedChange: (id: CurrOptionType['id']) => void;
  onRemoveOption: (id: CurrOptionType['id']) => void;
};

// 单个选项
const Option: FC<OptionProps> = (props) => {
  const {
    type = 'Radio',
    option,
    inputOptions,
    onOptionChange,
    onCheckedChange,
    onRemoveOption
  } = props;
  const { id, checked, label } = option;
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: option.id
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition ?? ''
  };

  return (
    <div
      className='flex flex-col b-b-1 b-b-solid b-b-#0000007f'
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <Input
        defaultValue={label}
        onChange={(value: string) => {
          onOptionChange({
            ...option,
            label: value,
            value
          });
        }}
        prefix={<MenuOutlined {...listeners} style={{ cursor: 'pointer', marginRight: '10px' }} />}
        suffix={
          <Space>
            <Tooltip placement='top' title='默认选中项' mouseEnterDelay={0.5}>
              {type === 'Checkbox' ? (
                <Checkbox checked={checked} onClick={() => onCheckedChange(id)} />
              ) : (
                <Radio checked={checked} onClick={() => onCheckedChange(id)} />
              )}
            </Tooltip>
            <Tooltip placement='top' title='删除当前项' mouseEnterDelay={0.5}>
              <CloseCircleOutlined
                style={{ cursor: 'pointer', color: 'rgba(128,128,128.0.5)' }}
                onClick={() => onRemoveOption(id)}
              />
            </Tooltip>
          </Space>
        }
        bordered={false}
        {...inputOptions}
      />
    </div>
  );
};

export default Option;
