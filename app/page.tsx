"use client"
import MyButton from "@/components/MyButton"
import Link from "next/link"

export default function Home() {
  function sayHello() {
    console.log("HELLO WORLD")
  }

  return (
    <main className="flex h-screen flex-row justify-evenly items-center space-x-4 flex-wrap ">
      <p>HELLO WORLD!</p>

      <MyButton buttonName={"Hello Click ME"} sayHello={sayHello}></MyButton>

      <MyButton
        buttonName={"This is unique"}
        sayHello={() => {
          console.log("THIS IS A TEST")
        }}
      ></MyButton>

      <Link href="/shop/product">Click me</Link>
      <Link href="/shop/product">Click me</Link>
      <Link href="/shop/product">Click me</Link>
    </main>
  )
}
