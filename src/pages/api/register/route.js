import { NextResponse } from 'next/server';
import { connectMongodb } from '../../../../lib/mongodb';
import User from '../../../../models/user';
import bcrypt from 'bcryptjs';

export async function POST(req) {
    
    try{
        const { name, email, password, role } = await req.json();

        console.log()


        const hashedPassword = await bcrypt.hash(password, 10);

        await connectMongodb();
        await User.create({ name, email, password:hashedPassword, role});

        return NextResponse.json({ message:"User Register."}, {status: 201});
    }catch (error)
    {
        return NextResponse.json(
            {message: "An Error occured"},
            {status: 500}
        );
    }
}
