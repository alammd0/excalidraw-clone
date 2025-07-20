import AuthPage from "@/components/AuthPage";


export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-500">
            <AuthPage type="login" />
        </div>
    )
}