import ResourceDocs from "@/app/components/ResourceDocs";
import { characterParams } from "@/docs-data/availableParams";
import { characterSchema } from "@/docs-data/schemas";
import { characterSingle, charactersAll, charactersFilter, charactersMultiple } from "@/docs-data/snippets";

export default function Characters() {
  return (
    <ResourceDocs
      first={true}
      resourceName={"Characters"}
      resourceTotal={201}
      resourcePageCount={11}
      resourceSchema={characterSchema}
      resourceAll={charactersAll}
      resourceSingle={characterSingle}
      resourceMultiple={charactersMultiple}
      resourceFilter={charactersFilter}
      resourceParams={characterParams}
      sampleIds={[188, 1]}
      sampleFilter={"/characters?status=alive&occupation=soldier"}
    />
  )
}