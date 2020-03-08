interface PageProps {
    close: () => void;
}

const CloseButton = (props: PageProps): React.ReactElement => {
    return (
      <div className="close" onClick={() => props.close()}>Close</div>
    );
  };

export default CloseButton;