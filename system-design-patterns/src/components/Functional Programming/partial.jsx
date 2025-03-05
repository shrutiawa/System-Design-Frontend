export const PartialComponent = (Component, partialProps) => {
    return (
        props => {
            return <Component {...props} {...partialProps} />
        }
    )
};

export const Button = ({ size, color, text, ...props }) => {
    return (
        <button style={{ fontSize: size === 'small' ? '8px' : '32px', backgroundColor: color, }}>
            {text}
        </button>
    )

};


export const RedButton = PartialComponent(Button, {color: 'red'});
export const RedSmallButton = PartialComponent(Button, {color: 'green',size:'small'});