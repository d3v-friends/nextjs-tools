"use server";
import {fnSearchParamParser, getSearchParams, NextPageProps} from "@root";
import React from "react";

export default async function ({searchParams}: NextPageProps) {
	const {id} = await getSearchParams(searchParams, {
		id: fnSearchParamParser.objectId("000000000000000000000000"),
	});
	return <></>;
}
