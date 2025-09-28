"use client"
import { motion } from "framer-motion";
import { SetPassword } from "@/components/infromationEdit";
import { useSession } from "@/lib/auth";

export default function AccountPage() {
    const session = useSession();
    return (
        <motion.div className="admin-page" initial={{x: "50px"}} animate={{x: "0px"}} transition={{duration: 0.2, ease: "easeInOut"}}>
            <div className="admin-page-header">
                <div>
                    <div className="admin-page-title">Security</div>
                    <div className="admin-page-subtitle">Manage your Account Security</div>
                </div>
            </div>
            {session.data?.user && <SetPassword />}
        </motion.div>
    )
}