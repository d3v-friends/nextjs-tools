"use client";

import {ReactNode} from "react";

export type ModalGenerator = <T>(params: ModalParams) => Awaited<T> | T;
export type ModalFC = (onClose: () => void) => ReactNode;
export type ModalParams = ReactNode | ModalFC;
