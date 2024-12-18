interface FormData {
  name: string;
  symbol: string;
  supply: string;
  description: string;
  website: string;
  twitter: string;
  telegram: string;
}

interface CreateTokenModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: FormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CreateTokenModal = ({ isOpen, onClose, formData, onInputChange }: CreateTokenModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-2xl mx-4">
        <h3 className="font-bold text-lg md:text-xl mb-4 md:mb-6">Create New Token</h3>
        
        <div className="form-control gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Basic Info */}
            <div className="space-y-4">
              {/* ... form fields ... */}
            </div>
          </div>

          <div className="modal-action">
            <button 
              className="btn btn-primary"
              onClick={() => console.log('Create token:', formData)}
            >
              Create Token
            </button>
            <button 
              className="btn"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose} />
    </div>
  );
}; 