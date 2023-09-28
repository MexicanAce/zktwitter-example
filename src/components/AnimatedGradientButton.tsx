import { Button, ButtonProps, Flex, FlexProps } from '@chakra-ui/react';
import React from 'react';
import styles from './AnimatedGradientButton.module.css';

interface Props extends FlexProps {
    leftColor?: string;
    rightColor?: string;
    borderRadius?: string;
    buttonProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
    disabled?: boolean;
}

const AnimatedGradientButton = ({
    children,
    leftColor = 'rgba(5, 67, 167, 0.89)',
    rightColor = 'rgba(6, 95, 239, 0.89)',
    borderRadius = '5px',
    disabled = false,
    buttonProps = {},
    style,
    ...props
}: Props) => {
    return (
        <Flex w='100%' {...props}>
            <button
                style={{ '--left-color': leftColor, '--right-color': rightColor, '--br': borderRadius, ...style } as React.CSSProperties}
                className={`${styles.bg}`}
                disabled={disabled}
                {...buttonProps}>
                {children}
            </button>
        </Flex>
    );
};

export default AnimatedGradientButton;
