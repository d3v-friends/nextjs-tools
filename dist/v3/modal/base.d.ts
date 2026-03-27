import { ReactNode } from "react";
export type ModalFC = (unmount: (value: boolean) => void) => ReactNode;
export interface ModalOptions {
    defaultBackgroundStyle: boolean;
    backgroundClassName: string;
    center: boolean;
    escape: boolean;
}
export default function (fc: ModalFC, { defaultBackgroundStyle, backgroundClassName, center, escape }?: Partial<ModalOptions>): Promise<boolean>;
