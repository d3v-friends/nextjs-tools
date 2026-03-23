export class TypedDocumentString<TResult, TVariables>
	extends String
	implements DocumentTypeDecoration<TResult, TVariables>
{
	__apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>["__apiType"]>;
	public __meta__?: Record<string, any> | undefined;
	private value: string;

	constructor(value: string, __meta__?: Record<string, any> | undefined) {
		super(value);
		this.value = value;
		this.__meta__ = __meta__;
	}

	override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
		return this.value;
	}
}

export type ContactPageQueryVariables = Exact<{[key: string]: never}>;

export type ContactPageQuery = {
	__typename: "Query";
	contactAll: Array<{
		__typename: "Contact";
		id: string;
		eigenvalue: {__typename: "ContactEigenvalue"; type: ContactType; createdAt: string};
		property: {__typename: "ContactProperty"; value: string};
	}>;
};

export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};

export enum ContactType {
	CtTelegram = "CT_TELEGRAM",
	CtUnknown = "CT_UNKNOWN",
}

export const ContactPageDocument = new TypedDocumentString(`
    query ContactPage {
  contactAll(filter: {eigenvalue: {type: {equal: CT_TELEGRAM}}}) {
    id
    eigenvalue {
      type
      createdAt
    }
    property {
      value
    }
  }
}
    `) as unknown as TypedDocumentString<ContactPageQuery, ContactPageQueryVariables>;

interface DocumentTypeDecoration<TResult, TVariables> {
	__apiType?: (variables: TVariables) => TResult;
}

interface Document<TResult, TVariables> {
	toString(): string & DocumentTypeDecoration<TResult, TVariables>;
}