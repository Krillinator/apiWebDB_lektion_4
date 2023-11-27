import { Suspense } from "react"
import Loading from "./loading"

export default function Page() {
  async function debugApi() {
    return await new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })
  }

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <p> This is PRODUCT PAGE </p>

        {/* TODO - Check ERRORS */}
        {debugApi().then(() => (
          <p> API TOOK 2 seconds SUCCESFULLY </p>
        ))}
      </main>
    </Suspense>
  )
}
