import ResourceDocs from "@/app/components/ResourceDocs";
import { organizationParams } from "@/docs-data/availableParams";
import { organizationSchema } from "@/docs-data/schemas";
import {
  organizationsAll,
  organizationsFilter,
  organizationsMultiple,
  organizationsSingle,
} from "@/docs-data/snippets";

export default function Organizations() {
  return (
    <ResourceDocs
      first={false}
      resourceName={"Organizations"}
      resourceTotal={17}
      resourcePageCount={1}
      resourceSchema={organizationSchema}
      resourceAll={organizationsAll}
      resourceSingle={organizationsSingle}
      resourceMultiple={organizationsMultiple}
      resourceFilter={organizationsFilter}
      resourceParams={organizationParams}
      sampleIds={[5, 17]}
      sampleFilter={"/organizations?affiliation=marley"}
    />
  );
}
