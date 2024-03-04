import { TailSpin } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#6d4b88"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Wrapper>
  );
};
