
const AmenitesCard = ({ data }: any) => {


    const Icon = data.icon || null
    return (
        <div className=" flex items-center gap-3 px-3 py-4 bg-white amenitiesShadow">
            <div>
                <Icon />

            </div>
            <div>
                <p className="text-textdark">{data.name} </p>

            </div>


        </div>
    )
}

export default AmenitesCard