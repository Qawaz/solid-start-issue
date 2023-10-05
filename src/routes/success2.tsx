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
            This doesn't cause error because I reversed the order of components even though imported from library
            {
                <InputButton
                    type={"button"}
                    onClick={() => setNavigatedToPassword(true)}
                    value={"Submit"}
                />
            }
            {
                navigatedToPassword() ? (
                    <input
                        type={"password"}
                        name={"password"}
                    />
                ) : null
            }
        </FormContainer>
    )

}