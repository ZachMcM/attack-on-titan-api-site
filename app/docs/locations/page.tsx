import { locationSchema } from "@/docs-data/schemas";
import ResourceDocs from "../../components/ResourceDocs";
import { locationsAll, locationsFilter, locationsMultiple, locationsSingle } from "@/docs-data/snippets";
import { locationParams } from "@/docs-data/availableParams";

export default function Locations() {
  return (
    <ResourceDocs
      first={false}
      resourceName={"Locations"}
      resourceTotal={36}
      resourcePageCount={2}
      resourceSchema={locationSchema}
      resourceAll={locationsAll}
      resourceSingle={locationsSingle}
      resourceMultiple={locationsMultiple}
      resourceFilter={locationsFilter}
      resourceParams={locationParams}
      sampleIds={[7, 9]}
      sampleFilter={"/locations?territory=shiganshina"}
    />
  )
}