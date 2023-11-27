import { FC } from "react"

interface Props {
  buttonName: string
  sayHello(): void
}

const MyButton: FC<Props> = ({ buttonName, sayHello }: Props) => {
  return (
    <>
      <main>
        <div
          onClick={sayHello}
          className=" transition-colors hover:bg-blue-400 p-4 bg-blue-500 hover:cursor-pointer"
        >
          <p>{buttonName}</p>
        </div>
      </main>
    </>
  )
}

export default MyButton
