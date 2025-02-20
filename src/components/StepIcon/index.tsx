import { chakra, Flex, forwardRef, Spinner, useStyles } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { motion } from 'framer-motion';
import React from 'react';
import { CheckIcon, CloseIcon } from '../Icons';

interface StepIconProps {
  isCompletedStep?: boolean;
  isCurrentStep?: boolean;
  isError?: boolean;
  isLoading?: boolean;
  icon?: React.ComponentType<any>;
  index: number;
  checkIcon?: React.ComponentType<any>;
}

const MotionFlex = motion(Flex);
const AnimatedCloseIcon = motion(CloseIcon);
const AnimatedSpan = motion(chakra.span);

const animationConfig = {
  transition: {
    duration: 0.25,
  },
  exit: { scale: 0.5, opacity: 0 },
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
};

export const StepIcon = forwardRef<StepIconProps, 'div'>((props, ref) => {
  const { icon, label } = useStyles();

  const {
    isCompletedStep,
    isCurrentStep,
    isError,
    isLoading,
    icon: CustomIcon,
    index,
    checkIcon: CustomCheckIcon,
  } = props;

  const labelStyles = {
    fontWeight: 'medium',
    color: mode(`gray.900`, `gray.100`)(props),
    textAlign: 'center',
    fontSize: 'md',
    ...label,
  };

  const Icon = React.useMemo(() => (CustomIcon ? CustomIcon : null), [
    CustomIcon,
  ]);

  const Check = React.useMemo(
    () => (CustomCheckIcon ? CustomCheckIcon : CheckIcon),
    [CustomCheckIcon]
  );

  return React.useMemo(() => {
    if (isCompletedStep) {
      return (
        <MotionFlex key="check-icon" {...animationConfig}>
          <Check color="white" style={icon} />
        </MotionFlex>
      );
    }
    if (isCurrentStep) {
      if (isError)
        return (
          <AnimatedCloseIcon
            key="icon"
            color="white"
            {...animationConfig}
            style={icon}
          />
        );
      if (isLoading)
        return (
          <Spinner
            width={icon.width as string}
            height={icon.height as string}
          />
        );
    }
    if (Icon)
      return (
        <MotionFlex key="step-icon" {...animationConfig}>
          <Icon style={icon} />
        </MotionFlex>
      );
    return (
      <AnimatedSpan
        ref={ref}
        key="label"
        __css={labelStyles}
        {...animationConfig}
      >
        {(index || 0) + 1}
      </AnimatedSpan>
    );
  }, [isCompletedStep, isCurrentStep, isError, isLoading, Icon, icon]);
});
