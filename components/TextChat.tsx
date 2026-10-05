'use client'
import { useState, useEffect } from "react";
import ChartSkeleton from "@/components/ChartSkeleton";

export default function TextChat(props: {
    promiseLike?: () => PromiseLike<any>
    className?: string
}) {
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        props.promiseLike?.().then(r => {
            setMessage(r)
            setLoading(false)
        })
    }, [])
    return loading ? <ChartSkeleton /> : <h1 className={props.className}>{ message }</h1>
}