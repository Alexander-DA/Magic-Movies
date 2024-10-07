import { Router } from "express";
import authService from "../services/authService.js";
import validator from "validator";

const router = Router();

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    const { email, password, rePassword } = req.body;

    if (!validator.isEmail(email)) {
        return res.status(400).end();
    }

    await authService.register(email, password);
    const token = await authService.login(email, password);

    res.cookie('auth', token, { httpOnly: true });

    res.redirect('/')
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const token = await authService.login(email, password);

    // Add token to cookie
    res.cookie('auth', token, { httpOnly: true });

    res.redirect('/')
})

router.get('/logout', (req, res) => {
    res.clearCookie('auth');

    res.redirect('/');
})

export default router;