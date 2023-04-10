import { useLoaderData } from "react-router-dom";
import { PageLayout } from "../../components/PageLayout/PageLayout";

export function loader({ params }: any) {
  return params.detailId;
}

export const Detail: React.FC = () => {
  const detailId = useLoaderData() as string;

  return (
    <PageLayout>
      <div id={detailId}>Detail : {detailId} </div>
    </PageLayout>
  );
};
