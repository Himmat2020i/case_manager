import "./InputTextStyle.css";
import Svg from "../../assets/svg";
import { Form, InputGroup } from "react-bootstrap";
import React, { memo, useCallback, useMemo, useState } from "react";
import { InputPropsInterface } from "../../interface/inputTextInterface";

const InputText = memo(
  ({
    type,
    value,
    onClick,
    onChange,
    subfixIcon,
    prefixIcon,
    placeholder,
    ...props
  }: InputPropsInterface) => {
    const [visible, setVisible] = useState(false);

    const PreFixedIcon = useMemo(() => {
      if (typeof prefixIcon === "string" && Svg[prefixIcon]) {
        return Svg[prefixIcon];
      }
      return null;
    }, [prefixIcon]);

    const SvgIcon = useMemo(() => {
      if (type === "password") {
        return Svg[!visible ? "VisibleIcon" : "InvisibleIcon"];
      }
      return typeof subfixIcon === "string" ? Svg[subfixIcon] : null;
    }, [type, subfixIcon, visible]);

    const checkType = () => {
      return type === "password" ? (visible ? "text" : "password") : type;
    };

    const renderSubFixIcon = useCallback(() => {
      return SvgIcon && <SvgIcon fill={"#fff"} />;
    }, [SvgIcon]);

    const renderPrefixIcon = useCallback(() => {
      return PreFixedIcon && <PreFixedIcon fill={"#fff"} />;
    }, [PreFixedIcon]);

    return (
      <>
        <InputGroup>
          {PreFixedIcon && <InputGroup.Text>{renderPrefixIcon()}</InputGroup.Text>}
          <Form.Control
            size={"sm"}
            value={value}
            type={checkType()}
            onChange={onChange}
            placeholder={placeholder}
            className="form-control-xl"
            autoComplete="off"
            {...props}
          />
          {SvgIcon && (
            <InputGroup.Text
              onClick={() => {
                if (type === "password") {
                  return setVisible((pre) => !pre);
                }
                return onClick?.();
              }}>
              {renderSubFixIcon()}
            </InputGroup.Text>
          )}
        </InputGroup>
      </>
    );
  }
);

InputText.displayName = "InputText";
export default InputText;
