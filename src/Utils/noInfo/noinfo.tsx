const NoInformation = ({ data }: any) => {
  return data?.length === 0 ? (
    <div className="no-info">اطلاعاتی موجود نیست</div>
  ) : null;
};

export default NoInformation;
