import { moveToNextStage } from './lib/ats/actions';

async function test() {
  try {
    console.log('Testing moveToNextStage...');
    // Use one of the existing IDs from the database
    const id = 'f88eb647-3dce-4445-9314-f55b7af21aba';
    await moveToNextStage(id, 'phone_interview');
    console.log('Success!');
  } catch (err) {
    console.error('Error:', err);
  }
}

test();
