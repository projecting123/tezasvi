import { formatString } from "@/utils/format-product-name"
import { Flex } from "@radix-ui/themes"

export default async function page({ params }: { params: Promise<{ pName: string }> }) {
  const { pName } = await params
  const formattedName = formatString(pName);
  return (
    <Flex justify={'center'} align={'center'}>
      <h1>{formattedName}</h1>
    </Flex>
  )
}
