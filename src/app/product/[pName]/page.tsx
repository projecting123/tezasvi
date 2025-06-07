import React from 'react'
import { formatString } from "@/utils/functions/format-product-name"

export default async function page({ params }: { params: Promise<{ pName: string }> }) {
  const { pName } = await params
  const formattedName = formatString(pName);
  return (
    <>
      <h1>{formattedName}</h1>
    </>
  )
}


