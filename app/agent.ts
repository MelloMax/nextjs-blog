import {createAgent} from 'langchain'
import {ChatGoogleGenerativeAI} from '@langchain/google-genai'
import dotenv from 'dotenv'
import {ProxyAgent, setGlobalDispatcher} from "undici";
import z from 'zod'

export * from 'langchain'


dotenv.config()

// e.g. 开启代理
if (process.env.HTTPS_PROXY) setGlobalDispatcher(new ProxyAgent(process.env.HTTPS_PROXY))

export const googleAgent = new ChatGoogleGenerativeAI({
    model: 'gemini-3.8-flash',
    temperature: 0.7,
}).withStructuredOutput(z.object({
    items: z.array(z.object({
        name: z.string('菜品名称'),
        qty: z.int('数量'),
        note: z.string('备注;例如可乐走冰').optional()
    })),
    takeaway: z.boolean('是否带走')
}, '茶餐厅清单格式').strict(),)


export const openAgent = createAgent({
    model: 'gpt-5.5',
    tools: [],
})