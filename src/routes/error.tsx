import {createEffect, createSignal} from "solid-js";
import {styled} from "@qinetik/emotion";

export const InputButton = styled("input")`
  width: 100%;
  box-sizing: border-box;
`

export const FormContainer = styled("form")`
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