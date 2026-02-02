"use client";

import {useState} from "react";
import {UnwrapForm} from "@src/v3";

export default function <F extends object>(initial: UnwrapForm<F>) {
	return useState<UnwrapForm<F>>(initial);
}
