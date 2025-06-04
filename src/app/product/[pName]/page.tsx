import { formatString } from "@/utils/format-product-name"
import { Flex } from "@radix-ui/themes"

export default async function page({ params, searchParams }: { params: Promise<{ pName: string }>, searchParams: Promise<{ pid: string }> }) {
  const { pName } = await params
  const { pid } = await searchParams
  const formattedName = formatString(pName);
  return (
    <Flex justify={'center'} align={'center'}>
      <h1>{formattedName}</h1>
    </Flex>
  )
}
