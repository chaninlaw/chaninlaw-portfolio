import { env } from '@/env'
import { HfInference } from '@huggingface/inference'
import { HuggingFaceStream, StreamingTextResponse } from 'ai'
import { experimental_buildOpenAssistantPrompt } from 'ai/prompts'

const Hf = new HfInference(env.HUGGINGFACE_API_KEY)

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  const { messages } = await req.json()

  try {
    const response = Hf.textGenerationStream({
      model: 'meta-llama/Meta-Llama-3-8B-Instruct', //'OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5',
      inputs: experimental_buildOpenAssistantPrompt(messages),
      parameters: {
        max_new_tokens: 200,
        // @ts-ignore (this is a valid parameter specifically in OpenAssistant models)
        typical_p: 0.2,
        repetition_penalty: 1,
        truncate: 1000,
        return_full_text: false
      }
    })

    const stream = HuggingFaceStream(response)

    return new StreamingTextResponse(stream)
  } catch (error) {
    console.error(error)
    return new Response(null, {
      status: 500
    })
  }
}
