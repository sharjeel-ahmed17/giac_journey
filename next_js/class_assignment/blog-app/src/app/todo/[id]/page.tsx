import getAllProducts from "@/utils/product";

export default async function TodoDetails({ params }: { params: { id: string } }) {

    const todos = await getAllProducts();
    const currentId = parseInt(params.id);
    const currentTodo = todos[currentId - 1];

    // console.log("todo data >>>>>>0");
    return (
        <div>products details
            <p>{currentTodo.title}</p>
        </div>
    )
}
