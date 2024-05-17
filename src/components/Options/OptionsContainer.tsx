import {
  DndContext,
  PointerSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent
} from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { type FC } from 'react';
import { type InputProps } from 'src/components/Input';
import Option from './Option';
import sortOptions from './helpers/sortOptions';
import { type CurrOptionType, type CurrOptionsConfigType } from './type';

type OptionsContainerProps = {
  optionsConfig: CurrOptionsConfigType;
  inputOptions?: InputProps;
  onOptionsConfigChange: (value: CurrOptionsConfigType) => void;
};

// 选项容器
const OptionsContainer: FC<OptionsContainerProps> = (props) => {
  const { optionsConfig, inputOptions, onOptionsConfigChange } = props;
  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));
  const { type, options } = optionsConfig || {};

  // 拖动结束
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id && over?.id !== undefined) {
      onOptionsConfigChange({
        ...optionsConfig,
        options: sortOptions(options, active.id, over?.id)
      });
    }
  };

  // 删除选项
  const onRemoveOption = (id: string) => {
    const newOptions = options.filter((item) => item.id !== id);
    onOptionsConfigChange({
      ...optionsConfig,
      options: newOptions
    });
  };

  // 更新选项
  const onOptionChange = (option: CurrOptionType) => {
    const newOptions = [...options];
    const newOptionIndex = options?.findIndex((item) => item.id === option.id);
    if (newOptionIndex !== -1) newOptions[newOptionIndex] = option;
    onOptionsConfigChange({
      ...optionsConfig,
      options: newOptions
    });
  };

  // 更新选项
  const onCheckedChange = (id: string) => {
    const newOptions = optionsConfig?.options?.map((option: CurrOptionType) => ({
      ...option,
      checked:
        option.id === id
          ? !option?.checked
          : optionsConfig?.type === 'Checkbox'
            ? option?.checked
            : false
    }));
    onOptionsConfigChange({
      ...optionsConfig,
      options: newOptions
    });
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis]}
    >
      <SortableContext items={options} strategy={verticalListSortingStrategy}>
        {options?.map((option) => (
          <Option
            key={option.id}
            type={type}
            option={option}
            inputOptions={inputOptions}
            onOptionChange={onOptionChange}
            onCheckedChange={onCheckedChange}
            onRemoveOption={onRemoveOption}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default OptionsContainer;
