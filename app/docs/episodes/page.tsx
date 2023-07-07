import ResourceDocs from "@/app/components/ResourceDocs";
import { episodeParams } from "@/docs-data/availableParams";
import { episodeSchema } from "@/docs-data/schemas";
import { episodesAll, episodesFilter, episodesMultiple, episodesSingle } from "@/docs-data/snippets";

export default function Episodes() {
  return (
    <ResourceDocs
      first={false}
      resourceName={"Episodes"}
      resourceTotal={88}
      resourcePageCount={5}
      resourceSchema={episodeSchema}
      resourceAll={episodesAll}
      resourceSingle={episodesSingle}
      resourceMultiple={episodesMultiple}
      resourceFilter={episodesFilter}
      resourceParams={episodeParams}
      sampleIds={[88, 87]}
      sampleFilter={"/episodes?episode=S1"}
    />
  )
}