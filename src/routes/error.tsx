import {createEffect, createSignal} from "solid-js";
import {baseStyled} from "@qinetik/emotion";

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

export default function Check() {

    const [navigatedToPassword, setNavigatedToPassword] = createSignal<boolean>(false)

    createEffect(() => {
        setNavigatedToPassword(true)
    })

    return (
        <FormContainer>
            {
                navigatedToPassword() ? (
                    <input
                        type={"password"}
                        name={"password"}
                    />
                ) : null
            }
            You must refresh the page again to see the error
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