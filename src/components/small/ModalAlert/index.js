import React from 'react';
import {Button, Modal, Alert, IconButton, CloseIcon} from 'native-base';
import {fonts} from '../../../utils';

const ModalAlert = ({
  open,
  setOpen,
  success = 'success',
  title,
  textBody,
  button,
  loading = false,
}) => {
  return (
    <>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <Modal.Content maxWidth="400px" padding={0}>
          <Alert
            status={success}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center">
            <Alert.Icon boxSize="40px" />
            <Alert.Title mt={2} mb={2}>
              {title}
            </Alert.Title>
            <Alert.Description>{textBody}</Alert.Description>
            {loading ? (
              <Button mt={2} isLoading>
                Loading
              </Button>
            ) : (
              <Button
                mt={2}
                padding={2}
                _text={{fontSize: 14, fontFamily: fonts.primary.bold}}
                onPress={() => {
                  setOpen(false);
                }}>
                close
              </Button>
            )}
            <IconButton
              icon={<CloseIcon color="gray.500" size="xs" />}
              position="absolute"
              top={0.5}
              right={1}
              onPress={() => setOpen(false)}
            />
          </Alert>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default ModalAlert;
