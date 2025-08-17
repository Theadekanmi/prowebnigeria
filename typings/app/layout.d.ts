
declare interface metadataType {
	static title: string;

	static description: string;

	static keywords: string[];

	static authors: {	}[];

	static creator: string;

	static publisher: string;

	static metadataBase: URL;

	static alternates: {
	static canonical: string;

	static languages: {	};
	};

	static openGraph: {
	static title: string;

	static description: string;

	static url: string;

	static siteName: string;

	static locale: string;

	static type: string;
	};

	static twitter: {
	static card: string;

	static title: string;

	static description: string;

	static creator: string;

	static site: string;
	};

	static robots: {
	static index: boolean;

	static follow: boolean;

	static googleBot: {
		static index: boolean;

		static follow: any;
	};
	};
}
