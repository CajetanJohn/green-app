import React, { useEffect, useState } from 'react';
import BasicButton from '../materials/bs-btn';
import Modal from '../components/Modal';

const Installer = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setIsModalOpen(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
      setIsInstalled(true);
      setIsModalOpen(false);
    } else {
      setIsInstalled(false);
      setIsModalOpen(true);
    }
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          setIsModalOpen(false);
        }
        setDeferredPrompt(null);
      });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsInstalled(true);
  };

  return (
    <>
      {!isInstalled && showInstallPrompt && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className="install-prompt">
            <p>Install this app for a better experience.</p>
            <BasicButton className='install-button' onClick={handleInstallClick}>install</BasicButton>
          </div>
          <style jsx>{`
            .install-prompt {
              text-align: left;
              display: flex;
              flex-direction: column;
            }
            .install-button, .close-button {
              margin: 5px auto;
            }
          `}</style>
        </Modal>
      )}
    </>
  );
};

export default Installer;
