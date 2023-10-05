import {createEffect, createSignal} from "solid-js";
import {baseStyled} from "~/components/baseStyled";

export const InputButton = baseStyled("input")`
  width: 100%;
  box-sizing: border-box;
`

export const FormContainer = baseStyled("form")`
  display: flex;
  flex-direction: column;
  gap: 0.7em;
  padding: 1em 3em 3em 3em;
  border-radius: 1em;
`

export default function SuccessRoute() {

    const [navigatedToPassword, setNavigatedToPassword] = createSignal<boolean>(false)

    createEffect(() => {
        setNavigatedToPassword(true)
    })

    return (
        <FormContainer>
            This doesn't cause error because I imported the baseStyled function into my source code
            {
                navigatedToPassword() ? (
                    <input
                        type={"password"}
                        name={"password"}
                    />
                ) : null
            }
            {
                <InputButton
                    type={"button"}
                    onClick={() => setNavigatedToPassword(true)}
                    value={"Submit"}
                />
            }
        </FormContainer>
    )

}