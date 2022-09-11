import React, { useState } from 'react';

const Dropdown = () => {
    const [data, setData] = useState([]);

    const getData = (e) => {
        e.preventDefault();
        const listData = e.target.value;
        const allListData = [...data, listData];
        setData(allListData);
        console.log(allListData)

    }
    return (
        <div className='mt-10'>
            <form action="">
                <div className='flex justify-center items-center '>
                    <select class="select select-primary w-full max-w-xs">
                        {
                            data.map(data => <option>{data}</option>)
                        }
                    </select>

                    <div>
                        <label
                            for="my-modal-6" class="modal-button  w-6 h-6 rounded-full border-4 border-[#4b5320]">
                            Click
                        </label>
                        <div>
                            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                            <div class="modal modal-bottom sm:modal-middle">
                                <div class="modal-box">
                                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <input type="text"
                                        name='categoryname'
                                        placeholder="add category"
                                        onBlur={getData}
                                        class="input input-bordered input-primary w-full" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Dropdown;