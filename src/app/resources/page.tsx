// import { Resource } from "sst";

interface Item {
  key: string;
  value: string | undefined;
}

interface ItemListProps {
  items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  const renderedItems = [];

  for (let i = 0; i < items.length; i++) {
    const value = items[i].value ?? (
      <span className="font-bold text-red-500">undefined</span>
    );

    renderedItems.push(
      <div className="flex flex-row items-center gap-5 py-1">
        <p className="text-destructive"> {items[i].key} :</p>
        <pre className="text-primary text-sm">{value}</pre>
      </div>
    );
  }

  return renderedItems;
};

export default async function ResourcesPage() {
  const items: Item[] = [
    { key: "region", value: process.env.NEXT_PUBLIC_REGION },
    // { key: "cognito userpool id", value: Resource.UserPool.id },
    // { key: "cognito userpool client id", value: Resource.WebClient.id },
    // {
    //   key: "cognito issuer",
    //   value:
    //     "https://cognito-idp." +
    //     process.env.NEXT_PUBLIC_REGION +
    //     ".amazonaws.com/" +
    //     Resource.UserPool.id,
    // },
    // { key: "cognito domain", value: process.env.NEXT_PUBLIC_USER_POOL_DOMAIN },
    // { key: "auth secret", value: process.env.NEXTAUTH_SECRET },
    // { key: "cognito userpool client secret", value: Resource.WebClient.secret },
  ];

  return (
    <div className="flex flex-grow flex-col gap-4 items-center justify-center">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Environment value</h2>
        <ItemList items={items} />
      </div>
    </div>
  );
}
