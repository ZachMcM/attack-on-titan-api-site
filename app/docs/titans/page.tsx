import ResourceDocs from "@/app/components/ResourceDocs";
import { titanParams } from "@/docs-data/availableParams";
import { titanSchema } from "@/docs-data/schemas";
import { titansAll, titansFilter, titansMultiple, titansSingle } from "@/docs-data/snippets";

export default function Titans() {
  return (
    <ResourceDocs
      first={false}
      resourceName={"Titans"}
      resourceTotal={9}
      resourcePageCount={1}
      resourceSchema={titanSchema}
      resourceAll={titansAll}
      resourceSingle={titansSingle}
      resourceMultiple={titansMultiple}
      resourceFilter={titansFilter}
      resourceParams={titanParams}
      sampleIds={[1, 3]}
      sampleFilter={"/titans?allegiance=marley"}
    />
  )
}