import { type ChangeEvent, type Ref } from 'react';

export interface FormInputProps {
    placeholder?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    ref?: Ref<HTMLInputElement>;
}