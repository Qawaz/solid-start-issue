import {JSX} from "solid-js";
import {Dynamic} from "solid-js/web";
import {serializeStyles} from "@emotion/serialize";
import {Interpolation} from "@emotion/serialize";
import hashFunc from "@emotion/hash"

// The props given to the component invoked by the user
type BaseStyledComponentProps<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T] & {
    class?: string
}

// The created component that user can invoke
type BaseStyledComponent<T extends keyof JSX.IntrinsicElements> = ((props: BaseStyledComponentProps<T>) => JSX.Element);

// the props of the function that takes css that is passes along with args, vars & functions in template literals
// the C is the component which takes the props
type StyledComponentCreatorFunctionProp<P> = (TemplateStringsArray | Interpolation<P>)[]

export function baseStyled<T extends keyof JSX.IntrinsicElements>(tagName: string): (...args: StyledComponentCreatorFunctionProp<BaseStyledComponentProps<T>>) => BaseStyledComponent<T> {

    return (...args: StyledComponentCreatorFunctionProp<BaseStyledComponentProps<T>>) => {

        const Component: BaseStyledComponent<T> = (props: BaseStyledComponentProps<T>) => {

            const serStyles = serializeStyles(
                args,
                undefined,
                props
            )

            const actualStyles = serStyles.styles
            const hash = hashFunc(actualStyles)
            const className = 'c' + hash

            return (
                <>
                    <style>{`.${className}{${actualStyles}}`}</style>
                    <Dynamic
                        component={tagName}
                        {...props}
                        class={props.class ? `${props.class} ${className}` : className}
                    />
                </>
            )

        }

        return Component

    }

}